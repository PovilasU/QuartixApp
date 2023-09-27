export const getValidInspection = (vehicle, inspections) => {
    return inspections.filter((inspection) => {
      const { allowedType } = inspection;
      return allowedType === "any" || allowedType.includes(vehicle.type);
    });
  };

  export const avInspectionsNames = (arr) => {
    return arr.map((inspection) => {
      return inspection.name;
    });
  };

  export const avInspectionsNamesNew = (vehicle, inspections) => {
    //vehicle.inspection
    return inspections
      .filter((inspection) => {
        const { allowedType } = inspection;
        return allowedType === "any" || allowedType.includes(vehicle.type);
      })
      .map((inspection) => {
        return inspection.name;
      });
  };
  export const getAvailableInspections = (vehicle, inspections) => {
    let inspectionNames = inspections
      .filter((inspection) => {
        return (
          inspection.allowedType === "any" ||
          inspection.allowedType.includes(vehicle.type)
        );
      })
      .map((inspection) => {
        return inspection.name;
      });
    let vInspections = vehicle.inspection;
    let availableArr = [...inspectionNames];

    vInspections.forEach((i) => {
      inspectionNames.forEach((e) => {
        if (e == i) {
          availableArr = availableArr.filter((el) => {
            return el != e;
          });
        }
      });
    });

    return availableArr;
  };