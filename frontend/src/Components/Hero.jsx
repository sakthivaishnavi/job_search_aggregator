import React,{useState, useEffect} from 'react'
import { fetch } from '../api/jobs_api' 

const Hero = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadjobs = async () => {
            try{
                const jobs = await fetch();
                setJobs(jobs);
                setLoading(false);
            }
            catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        };
        loadjobs();
    }, []);

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error}</div>
    }

  return (
    <div className="p-8">
    <div className='flex justify-between items-center mb-8'>
      <h1 className="text-4xl font-bold text-center">Job Listings</h1>
      <a href='/contact' className='text-black font-semibold text-xl underline'>Contact Us</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
        {jobs.map((job, index) => (
          <div key={index} className="border p-8 rounded-xl shadow-2xl hover:scale-105 transition-transform delay-100 bg-sky-950 text-white opacity-90 flex flex-col gap-5">
            <h2 className="font-bold">Title: {job.title}</h2>
            <p>Company Name: {job.company_name}</p>
            <p>Location: {job.location}</p>
            <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-black font-bold underline">
              View Job
            </a>
          </div>
        ))}
      </div>        
    </div>
  )
}

export default Hero