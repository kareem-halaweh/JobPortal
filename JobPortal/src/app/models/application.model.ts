export interface JobApplication {
  id: number;
  type: 'part time' | 'Full Time' ;
  jobTitle: string;
  companyName: string;
  imageUrl: string;
  status: 'pending' | 'accepted' | 'rejected' ;
  date: string;
}
