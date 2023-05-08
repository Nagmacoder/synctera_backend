const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const { PORT } = require("./config/config");
const customerRoutes = require("./routes/personalCustomer/personRoutes");
const disclosuerRoutes = require("./routes/disclouser/disclouserRoutes");
const verificationRoutes = require("./routes/verify/kyvVerification");
const businessesRoutes = require("./routes/Business/businessRoutes");
const accountRoutes = require("./routes/Account/accountRoutes");

const app = express();

app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000", // allow requests from this origin only
//   })
// );

app.use("/api/customers/", customerRoutes);
app.use("/api/businesses/", businessesRoutes);
app.use("/api/disclosures/", disclosuerRoutes);
app.use("/api/verifications/", verificationRoutes);
app.use("/api/accounts/", accountRoutes);

app.listen(PORT, (res) => {
  console.log(`Server started on port ${PORT}`);
});
