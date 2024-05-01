import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { HiDotsVertical } from "react-icons/hi";
import { useOutsideClick } from "../hook/useOutsideClick";
import { createPortal } from "react-dom";

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const StyledToggle = styled.button`
    background: none;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-grey-700);
    }
`;

const StyledList = styled.ul`
    position: fixed;

    background-color: var(--color-grey-0);
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-md);

    right: ${(props) => props.position.x}px;
    top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
    width: 100%;
    text-align: left;
    padding: 1.2rem 2.4rem;
    font-size: 1.4rem;
    transition: all 0.2s;
    background: none;
    border: none;

    display: flex;
    align-items: center;
    gap: 1.6rem;
    white-space: nowrap;

    &:hover {
        background-color: var(--color-brand-200);
    }

    & svg {
        width: 1.6rem;
        height: 1.6rem;
        color: var(--color-grey-400);
        transition: all 0.3s;
    }
`;

const MenusContext = createContext();

function Menus({ children }) {
    const [openId, setOpenId] = useState("");
    const [position, setPosition] = useState({});
    const close = () => setOpenId("");
    const open = setOpenId;

    return (
        <MenusContext.Provider
            value={{
                openId,
                close,
                open,
                position,
                setPosition,
            }}
        >
            {children}
        </MenusContext.Provider>
    );
}

function Toggle({ id }) {
    const { open, openId, setPosition } = useContext(MenusContext);

    function handleToggle(e) {
        e.stopPropagation();
        const rect = e.target.closest("button").getBoundingClientRect();
        setPosition({
            x: window.innerWidth - rect.x - rect.width,
            y: rect.y + rect.height,
        });
        openId === "" || openId !== id ? open(id) : close();
    }

    return (
        <StyledToggle onClick={handleToggle}>
            <HiDotsVertical />
        </StyledToggle>
    );
}

function List({ children, id }) {
    const { openId, close, position } = useContext(MenusContext);
    const ref = useOutsideClick(close, false);

    if (openId !== id) return null;

    return createPortal(
        <StyledList ref={ref} position={position}>
            {children}
        </StyledList>,
        document.body
    );
}

function Button({ icon, children, onClick }) {
    const { close } = useContext(MenusContext);

    function handleClick() {
        onClick?.();
        close();
    }

    return (
        <li>
            <StyledButton onClick={handleClick}>
                {icon}
                <span>{children}</span>
            </StyledButton>
        </li>
    );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
