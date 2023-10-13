import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../assets/css/fonts.scss";
import Image from "../../assets/img/image";

const MenuItems = ({ companyData }) => {
    const [openKeys, setOpenKeys] = useState([]);

    const onOpenChange = (openKeysList) => {
        setOpenKeys(openKeysList);
    };

    return (
        <Menu openKeys={openKeys} mode="inline" theme="dark" onOpenChange={onOpenChange} className="menu">
            <img src={Image.mainLogo} alt={'logo'} className="main-logo" style={{width:"120px", height:"80px", marginLeft:"10px" }}/>
            <Menu.Item key="1"  className="menu-li">
                <Link className="text-decoration-none " to={`/tasks`}>
                    <b><img style={{width:'35px', height:'35px'}} alt={'task'} src={Image.Task}/> Tasks</b>
                </Link>
            </Menu.Item>
            {companyData?.role?.admin && (
                <Menu.Item key="2" className="menu-li">
                    <Link className="text-decoration-none " to={`/users`}>
                        <b><img style={{width:'35px', height:'35px'}} alt={'user'} src={Image.Users}/> Users</b>
                    </Link>
                </Menu.Item>
            )}
            <Menu.Item key="3"  className="menu-li">
                <Link className="text-decoration-none " to={`/usersettings`}>
                    <b><img style={{width:'27px', height:'27px'}} alt={'settings'} src={Image.Settings}/>   Settings</b>
                </Link>
            </Menu.Item>
        </Menu>
    );
};

const mapStateToProps = (state) => ({ companyData: state.user.companyData });

export default connect(mapStateToProps)(MenuItems);
