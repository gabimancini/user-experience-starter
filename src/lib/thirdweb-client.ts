import { createThirdwebClient } from "thirdweb";

export default createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID!,
});

