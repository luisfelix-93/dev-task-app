import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faUser, faListCheck, faTag, faUserPlus, faClipboard, faFile} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import { Link } from 'react-router-dom';

const MenuSideBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <button className="menu-button" onClick={toggleSidebar}>
        <div className={`bar1 ${collapsed ? '' : 'open'}`}></div>
        <div className={`bar2 ${collapsed ? '' : 'open'}`}></div>
        <div className={`bar3 ${collapsed ? '' : 'open'}`}></div>
      </button>
      <Sidebar collapsed={collapsed}>
        <Menu iconShape="circle">
            <SubMenu label="Usuário" icon={<FontAwesomeIcon icon={faUser}/>}>
            <MenuItem 
                icon={<FontAwesomeIcon icon={faUserPlus}/>}
                component={<Link to={'/new-user'}/>}
                >
                    Novo Usuário
            </MenuItem>
            <MenuItem 
                icon={<FontAwesomeIcon icon={faUser}
                component={<Link to={'/user'}/>}/>}
            >
                Área de Usuário
            </MenuItem>
            </SubMenu>
          <SubMenu label="Tarefas" icon={<FontAwesomeIcon icon={faCalendarDays} />}>
            <MenuItem 
                icon={<FontAwesomeIcon icon={faListCheck} 
                />}
                component={<Link to={'/to-do'}/>}
                >Tarefas a Fazer</MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faTag} />}>Quadro de Tarefas</MenuItem>
          </SubMenu>
          <SubMenu label="Projetos " icon={<FontAwesomeIcon icon={faClipboard} />}>
            <MenuItem icon={<FontAwesomeIcon icon={faFile} />}>Novo Projeto</MenuItem>
            <MenuItem></MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default MenuSideBar;
