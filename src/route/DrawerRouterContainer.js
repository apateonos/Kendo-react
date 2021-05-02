import * as React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import './DrawerRouterContainer.css';

const items = [
  { text: 'Home', icon: 'k-i-inbox', selected: true, route: '/' },
  { separator: true },
  //{ text: 'Calendar', icon: 'k-i-calendar', route: '/calender' },
  //{ separator: true },
  { text: 'Table', icon: 'k-i-file-txt', route: '/product' }
];

const DrawerRouterContainer = ({ children }) => {
  const history = useHistory();
  const wrapperRef = React.useRef();
  const [ state, setState ] = React.useState(false);
  
  const handleClick = () => setState(prev => !prev);

  const setSelectedItem = (pathName) => {
    let currentPath = items.find(item => item.route === pathName);
    if (currentPath.text) {
        return currentPath.text;
    }
  }

  const onSelect = (e) => {
    setState(false);
    history.push(e.itemTarget.props.route);
  }

  return (
    <>
      <div className="custom-toolbar">
        <Button icon="menu" look="flat" onClick={handleClick} />
        <span style={{ marginRight: "5px" }}className="main-box">매장 관리</span>
      </div>
      <Drawer
        expanded={state}
        position={'start'}
        mode={'push'}
        mini={true}
        items={items.map((item) => ({ 
          ...item, selected: item.text === setSelectedItem(history.location.pathname) 
        }))}
        onSelect={onSelect}
          >
        <DrawerContent>
          {children}
        </DrawerContent>
      </Drawer>
    </>  
  )
};

export default withRouter(DrawerRouterContainer);