export class User {
  
  fname: string;
  lname: string;
  email: string;
  password: string;
  verifyPassword: string;
  bio: string;

  constructor(fname, lname, email, password, verifyPassword, bio) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password;
    this.verifyPassword = verifyPassword;
    this.bio = bio;
  }
}