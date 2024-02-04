const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errorMiddleware");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");

// Init middleware

// Body Parser Middleware
app.use(express.json());

// Members API Routes
app.use("/models/users", require("./routes/usersRoutes"));
app.use("/models/services", require("./routes/servicesRoutes"));
app.use("/models/tours", require("./routes/toursRoutes"));

const PORT = 5000;

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
