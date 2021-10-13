import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';

const NavbarComp = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav pills>
        <NavItem>
          <NavLink href='/' active>
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href='/DataTranslator'>Data Translator</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/DataAnalytics'>Data Analytics</NavLink>
        </NavItem>

        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Data Analytics Team
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href='/DataScientist'>Data Scientist</DropdownItem>
            <DropdownItem href='/DataEngineer'>Data Engineer</DropdownItem>
            <DropdownItem href='/DataAnalyst'>Data Analyst </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </div>
  );
};

//

//             <UncontrolledDropdown>
//               <DropdownToggle
//                 aria-haspopup={true}
//                 caret
//                 color='default'
//                 data-toggle='dropdown'
//                 href='/DataAnalytics'
//                 nav
//               >
//                 Data Analytics Team
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href='/DataScientist'>
//                   Data Scientist
//                 </DropdownItem>
//                 <DropdownItem href='/DataEngineer'>Data Engineer</DropdownItem>
//                 <DropdownItem href='/DataAnalyst'>Data Analyst</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

export default NavbarComp;
