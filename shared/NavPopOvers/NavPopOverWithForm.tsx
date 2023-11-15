import React, { useState } from 'react';
import { NavPopOverWithFormContainer, PopoverWithFormContainer, SubmitButton } from './NavPopOverWithForm.style';
import { useRouter } from 'next/router';
import Select from 'react-select';

type Prop = {
  dropdown: boolean;
};

interface Option {
    value: string;
    label: string;
  }
  
const serviceOptions = [
    { value: 'Performance Mangement', label: 'Performance Mangement' },
    {
      value: 'Process Improvement and Automation',
      label: 'Process Improvement and Automation',
    },
    { value: 'Corporate Strategy', label: 'Corporate Strategy' },
    { value: 'International Market Entry', label: 'International Market Entry' },
  ];
  const solutionOptions = [
    { value: 'Org360', label: 'Org360' },
    { value: 'E-metric Suite', label: 'E-metric Suite' },
    { value: 'Sequential Jobs', label: 'Sequential Jobs' },
  ];


const NavPopOverWithForm = ({ dropdown }: Prop) => {

    const [selectedServices, setSelectedServiceOptions] = useState<
    Option[] | null
  >(null);
  const [selectedSolutions, setSelectedSolutionsOptions] = useState<
    Option[] | null
  >(null);

  const handleSelectServiceChange = (newValue: Option[] | null) => {
    setSelectedServiceOptions(newValue);
  };

  const handleSelectSolutionChange = (newValue: Option[] | null) => {
    setSelectedSolutionsOptions(newValue);
  };

  const route = useRouter();
  return (
    <NavPopOverWithFormContainer className={`dropdown ${dropdown ? 'show' : ''}`}>
      <PopoverWithFormContainer>
        <form>
          <div className="popover-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
            {/* <div className="popover">Enter your full name</div> */}
          </div>

          <div className="popover-group">
            <label>Phone Number:</label>
            <input type="tel" placeholder="Enter your phone number" />
            {/* <div className="popover">Enter a valid phone number</div> */}
          </div>

             {/* Soluitons multi dropdown */}
      <div className="popover-group">
        <label
          htmlFor="solution"
          
        >
          Solution
        </label>
        {/* <CustomListBox /> */}
        <Select
          isMulti={true}
          className='select-input'
          defaultValue={selectedSolutions}
          // onChange={setSelectedOption}
          options={solutionOptions}
          onChange={handleSelectSolutionChange as any}
        />
      </div>

      {/* Services multi dropdown */}
      <div className="popover-group">
        <label
          htmlFor="services"
         
        >
          Services
        </label>
        {/* <CustomListBox /> */}
        <Select
          isMulti={true}
          className='select-input'
          defaultValue={selectedServices}
          // onChange={setSelectedOption}
          options={serviceOptions}
          // minMenuHeight={800}
          onChange={handleSelectServiceChange as any}
        />
         </div>


          <div className="popover-group">
            <label>Company:</label>
            <input type="text" placeholder="Enter your company" />
            {/* <div className="popover">Enter your company name</div> */}
          </div>
        <SubmitButton>
        Submit
        </SubmitButton>
          {/* <button type="submit"></button> */}
        </form>
      </PopoverWithFormContainer>
    </NavPopOverWithFormContainer>
  );
};

export default NavPopOverWithForm;
