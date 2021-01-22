import { ChakraProvider } from "@chakra-ui/react";
import "../global/global.css";

// This default export is required in a new `pages/_app.js` file.
export function reportWebVitals(metric) {
  if (metric.label === "custom") {
    console.log(metric); // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

export default function ({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
