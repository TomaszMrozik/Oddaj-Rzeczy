import React from 'react';
import {Link} from 'react-scroll';


const Menu = () => {
    return (
        <div className={'menu'}>
            <Link activeClass="active"
                  to="/start"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={200}
                  delay={0}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className={'menuLink'}
            >
                Start
            </Link>
            <Link activeClass="active"
                  to="columns"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={300}
                  delay={0}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className={'menuLink'}

            >
                O co chodzi?
            </Link>
            <Link activeClass="active"
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={400}
                  delay={0}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className={'menuLink'}

            >
                O nas
            </Link>
            <Link activeClass="active"
                  to="information"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={0}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className={'menuLink'}

            >
                Fundacja i organizacje
            </Link>
            <Link activeClass="active"
                  to="form"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={600}
                  delay={0}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className={'menuLink'}

            >
                Kontakt
            </Link>
        </div>
    );
};

export default Menu;