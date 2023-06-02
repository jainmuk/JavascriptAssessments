class Person {
    constructor(name, address, dob, passportNo) {
      this.name = name;
      this.address = address;
      this.dob = dob;
      this.passportNo = passportNo;
    }

    get Name() {
      return this.name;
    }
    set Name(value) {
      this.name = value;
    }

    get Address() {
      return this.address;
    }
    set Address(value) {
      this.address = value;
    }

    get Dob() {
      return this.dob;
    }
    set Dob(value) {
      this.dob = value;
    }

    get PassportNo() {
      return this.passportNo;
    }
    set PassportNo(value) {
      this.passportNo = value;
    }
  
    printAddress() {
      const lines = this.address.split(', ');
      return lines.join('<br>');
    }
 
    calculateAge() {
      const today = new Date();
      const birthDate = new Date(this.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
  
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
  
      return age;
    }
  }
  
  export default Person;