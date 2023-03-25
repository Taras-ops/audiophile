import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async function() {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/products?populate[recommended_products][populate]=*&populate[imageHeroDesktop][populate]=*&populate[imageHeroTablet][populate]=*&populate[imageHeroMobile][populate]=*&populate[galleryDesktop][populate]=*&populate[galleryTablet]=*&populate[galleryMobile][populate]=*`,
        {
            headers: {
                Authorization: "bearer " + process.env.REACT_APP_TOKEN_API,
            },
        })

        const data = response.json()
        return data
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        loading: true,
        error: false,
    },
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.loading = true
            state.error = false
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.data = action.payload.data
            state.loading = false
            state.error = false
        },
        [fetchProducts.rejected]: (state, action) => {
            state.loading = false
            state.error = true
        }
    }
})

export default productSlice.reducer