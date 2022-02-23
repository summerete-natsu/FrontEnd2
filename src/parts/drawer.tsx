import React, { useState } from 'react';
import menuIcon from '@mui/icons-material';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// let open=false;
// function closeDrawer(){};
// function openDrawer(){};


// function handlerDrawer(props:any){
//  const[open,setOpen]=useState(open);
//  setOpen(){
//      if (open) {
//     openDrawer;
//      }else{
//       closeDrawer;
//      }
//     open=!open;
//  }


// }

// const drawerButton=(props:any)=>{
//   return (
//       <div>
//         <button onClick=handlerDrawer>
//         menuIcon
//         </button>

//       </div>

//   )
// }
// }


export function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: string, open: boolean) => (event: { type: string; key: string; }) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: string) => (
        <Box
        // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        // role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <div>
            {['left', 'right', 'top', 'bottom'].map((anchor) => {
                // <React.Fragment key={anchor}>
                //     <Button onClick={toggleDrawer(anchor:true)}>{anchor}</Button>
                //     <SwipeableDrawer
                        // anchor={anchor}
                        // open={state[anchor]}
                        // onClose={toggleDrawer(anchor, false)}
                        // onOpen={toggleDrawer(anchor, true)}
                //     >
                //         {list(anchor)}
                //     </SwipeableDrawer>
                // </React.Fragment>
            
                    }
                )
            }

        </div>
    );
}


