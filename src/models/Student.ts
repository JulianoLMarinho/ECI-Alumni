export default class Student{
    Nome: string;
    Picture: string;
    GraduateDate: string;
    Email: string;
    ProfissionalResume: string;

    constructor(Obj:any){
        this.Nome = Obj.nome;
        this.Picture = Obj.picture;
        this.GraduateDate = Obj.graduateDate;
        this.Email = Obj.email;
        this.ProfissionalResume = Obj.profissionalResume;
    }    
}