import { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { StyledDropdown, StyledDropdownItem, StyledDropdownMenu, StyledDropdownWrapper, StyledLabelWrapper } from "./styled";

interface BetDropdownProps {
  options: string[];
  onSelect?: (option: string) => void;
  defaultOption?: string;
  label?: string;
}

const Dropdown: React.FC<BetDropdownProps> = ({ options, onSelect, defaultOption, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption || options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <StyledDropdownWrapper ref={dropdownRef}>
      <StyledDropdown onClick={toggleDropdown} $isOpen={isOpen}>
        <StyledLabelWrapper>
          <span style={{ fontWeight: "bold" }}>{label || ""}</span> <span>{selectedOption}</span>
        </StyledLabelWrapper>
        <MdOutlineKeyboardArrowDown />
      </StyledDropdown>
      <StyledDropdownMenu $isOpen={isOpen}>
        {options.map((option) => (
          <StyledDropdownItem key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </StyledDropdownItem>
        ))}
      </StyledDropdownMenu>
    </StyledDropdownWrapper>
  );
};

export default Dropdown;
