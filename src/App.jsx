import "./App.css";
import { useState } from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import {
  Switch,
  FormControl,
  FormLabel,
  Button,
  Spacer,
  Stack,
  Box,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { DayAndNightToggle } from "./component/DayAndNightToggle/DayAndNightToggle";
import { FaDownload } from "react-icons/fa";
// import { MonacoEditor } from "./component/MonacoEditor/MonacoEditor.jsx";

function App() {
  const [isRough, setIsRough] = useState(false);
  const [isPan, setIsPan] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "10px",
          paddingLeft: "10px",
          backgroundColor: "#654",
          height: "5%",
        }}
      >
        <h1>PseudoCode2Flow</h1>
        <DayAndNightToggle
          onChange={() => {
            toggleColorMode();
          }}
          checked={colorMode === "dark"}
        />
      </div>
      <div style={{ height: "92%" }}>
        <Allotment>
          <div style={{ height: "100%" }}>
            <h2 className="subTitle">Mermaid Code</h2>
            <div style={{ height: "48%" }}>
              {/* <MonacoEditor /> */}
            </div>
            <h2 className="subTitle">Pseudo Code</h2>
            <div style={{ height: "48%" }}>monaca</div>
          </div>
          <div style={{ height: "100%" }}>
            <h2 className="subTitle">Flowchart</h2>
            <div
              style={{
                backgroundColor: "#913",
                height: "5%",
                display: "flex",
              }}
            >
              <Stack direction="row" spacing={4}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                  }}
                >
                  <Button
                    leftIcon={<FaDownload />}
                    colorScheme="blue"
                    variant="solid"
                  >
                    Download
                  </Button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FormLabel htmlFor="rough" mb="0" color="white">
                    Rough
                  </FormLabel>
                  <Switch id="rough" colorScheme="teal" />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FormLabel htmlFor="panandzoom" mb="0" color="white">
                    Pan&Zoom
                  </FormLabel>
                  <Switch id="panandzoom" colorScheme="teal" />
                </div>

                <Spacer />
              </Stack>
            </div>

            <div style={{ backgroundColor: "#577", height: "92%" }}></div>
          </div>
        </Allotment>
      </div>
      <div
        style={{
          backgroundColor: "#984",
          height: "3%",
        }}
      >
        Footer
      </div>
    </div>
  );
}

export default App;
