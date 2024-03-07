// Fetch published products from the App API
export async function list(page: number = 1, limit: number = 10) {
    return await fetch(`${import.meta.env.APP_BASE_URL}/api/v1/products?is_live=true&is_public=true&page=${page}&limit=${limit}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.APP_API_KEY}`
        }
    }).then((response) =>
        response.json()
    )
}