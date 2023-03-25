import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk(
    'product/fetchCategory',
    async function(category) {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/products?populate=*&filters[category][categoryName][$eq]=${category}`,
        {
            headers: {
                Authorization: "bearer " + process.env.REACT_APP_TOKEN_API,
            },
        })

        const data = response.json()
        return data
    }
)


export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        products: [],
        loading: true,
        error: false,
        errorMessage: ""
    },
    reducers: {},
    extraReducers: {
        [fetchCategory.pending]: (state, action) => {
            state.loading = true
        },
        [fetchCategory.fulfilled]: (state, action) => {
            state.products = action.payload.data
            state.loading = false
            state.error = false
        },
        [fetchCategory.rejected]: (state, action) => {
            state.loading = false
            state.error = true
        }
    }
})

export default categorySlice.reducer