export interface Job{
  id:number,
  title: string,
  company: string,
  description:string,
  location:string,
  about : string,
  employment_type:string,
  date: string,
  salary:string ,
  skills: string,
  imageUrl: string,
  category:string,
  employer_id: number,
  user:any
}

export interface jobAPP{
  job_id: string;
  user_id: number | null;
  status: 'pending' | 'accepted' | 'rejected';
  applied_date: Date;
  resume: string;
  cover_letter: string;
}

export interface jojo{
  title: string
  salary: string
  category: string
  employment_type: string
  description: string
  skills: string
  about: string
  user_id: number
  date: string

}

