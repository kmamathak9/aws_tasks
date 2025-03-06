exports.handler = async (event) => {
    const { httpMethod, path } = event; // Extract HTTP method and path

    // Allow only GET requests to "/hello"
    if (httpMethod === "GET" && path === "/hello") {
        return {
            statusCode: 200,
            message: "Hello from Lambda",
        };
    }

    // Return 400 Bad Request for other requests
    return {
        statusCode: 400,
        message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${httpMethod}`,
    };
};
