interface HamburgerProps { isOpen: boolean; }

export default function Hamburger({ isOpen }: HamburgerProps){
    return(
        <> 
            <div className="hamburger"> 
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>

            <style >{`
                .hamburger{
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                    position: static;

                }
                .burger{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: #090B0C;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }
                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                    background-color: ${isOpen ? '#f0f2f5' : '#090B0C' };
                }
                .burger2{
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                    background-color: ${isOpen ? '#f0f2f5' : '#090B0C' };
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                    background-color: ${isOpen ? '#f0f2f5' : '#090B0C' };
                }
                
            `}</style>
        </>
    )
}


