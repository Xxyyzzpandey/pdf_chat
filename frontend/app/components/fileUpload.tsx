'use client' 

import {Upload} from 'lucide-react'
const FileUploadComponents=()=>{

    const handleFileUploadButton=()=>{
        const el=document.createElement('input')
        el.setAttribute('type','file');
        el.setAttribute('accept','application/pdf');
        el.addEventListener('change',async(ev)=>{
            if(el.files && el.files.length>0){
                const file=el.files.item(0);
                if(file){
                    const formData=new FormData();
                    formData.append('pdf',file);

                    await fetch('http://localhost:3001/upload/pdf',{
                        method:'POST',
                        body:formData
                    });
                    console.log('file uploaded')
                }
            }
        });
        el.click();
    }

    return (
        <div className='bg-slate-900 text-white shadow-2xl flex justify-center items-center'>
            <div onClick={handleFileUploadButton} className='flex justify-center items-center flex-col'>
                <h3>Upload PDF File</h3>
                 <Upload/>
            </div>
            
        </div>
    )
}

export default FileUploadComponents