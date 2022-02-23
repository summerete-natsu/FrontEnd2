import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MenuList = [
    {
        icon: <button />,
        title: 'page1',
    },
    {
        icon: <button />,
        title: 'page2',
    },
]



function topMenu() {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open);
    }

    return (
        <React.Fragment>
            <div>
                <div className='topBar'>
                    <div className='topMenu'>
                        <button onClick={handleMenu}>menu</button>
                        MenuList.map(items)={
                            <div className='toggle-item'>
                                <div className='toggle-item1'>items.icon</div>
                                <div className='toggle-item2'>items.title</div>
                            </div>
                        }
                    </div>
                    <div className='topMessage'>Welcome</div>




                </div>

                <div className='bodyArea'>


                </div>
            </div>
        </React.Fragment>
    );
}

export default topMenu;

