function FPA(index, selectedData, setSelectedData) {
    // Handle the delete action
    const updatedData = { ...selectedData };
    updatedData.date.splice(index, 1);
    updatedData.pic_num.splice(index, 1);
    updatedData.material.splice(index, 1);
    updatedData.problem.splice(index, 1);
    updatedData.fix_deal.splice(index, 1);
    updatedData.times.splice(index, 1);
    updatedData.fill_person.splice(index, 1);
    updatedData.department.splice(index, 1);
    updatedData.department_director.splice(index, 1);
    updatedData.note.splice(index, 1);
    setSelectedData(updatedData);
  }
  
  export default FPA;