function disp_details(id:number,name:string,mail_id?:string) 
{ 
    
    console.log("ID:", id); 
    console.log("Name",name); 
    
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
 
 
 disp_details(123,"Swati");
 disp_details(111,"Swati","Swati@xyz.com");