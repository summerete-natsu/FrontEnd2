import AppBar from "@mui/material/AppBar/AppBar";
import Button from "@mui/material/Button/Button";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import Menu from "@mui/icons-material/Menu";
import { withAuthenticator } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { queryArtical, updateartical } from "../query"
import { IconButton } from "@mui/material";
import "./index1.css";
import Menulist from "../parts/MenuList";

function Frame() {
  const [data, setData] = useState("");
  useEffect(() => {
    (async () =>{
        const data3 = await API.graphql({ query: queryArtical});
        // @ts-ignore
        setData(data3["data"]["getTestTable"]["artical"])
    })()
  }, []);

  async function doSubmit() {
    const cc = await API.graphql({ query: updateartical, variables:{input: {id: "Hello, world!", sort: "Hello, world!", artical:data}}});
    console.log(cc);
  }

  function inputTextValue(e:any) {
    setData(e.target.value)
  }


  return (
    <React.Fragment>
      <>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu style={{ color: "#FF0000", fontSize: 30 }} />
              </IconButton>

              <Typography variant="h6">ラーメンUpdate</Typography>
              <Button onClick={doSubmit} color="inherit" className="ButtonStyle">
                submit
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Menulist />
          <textarea onChange={inputTextValue} value={data}>
              
          </textarea>
        </div>
      </>
    </React.Fragment>
  );
}
export default withAuthenticator(Frame);

