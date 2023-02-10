import React, { useEffect, useState } from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function MultiSelect({
    illnesses,
    illnessDefaultValues,
    handleIllness
}) {
    const [illnessOptions, setIllnessOptions] = useState([]);

    useEffect(() => {
        if(illnesses) {
            let arr = [];
            illnesses.map((item) => {
                arr.push({ value: item.name, label: item.name });
            });
            setIllnessOptions(arr);
        }
    }, []);
      return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={illnessDefaultValues}
            isMulti
            options={illnessOptions}
            onChange={handleIllness}
        />
      );
}
