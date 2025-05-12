export interface JobApplication {
  id: number;
  userId: number;
  jobId: number;
  Email: string;
  username : string;
  type: 'part time' | 'Full Time' ;
  jobTitle: string;
  companyName: string;
  imageUrl: string;
  status: 'pending' | 'accepted' | 'rejected' ;
  date: string;
}
