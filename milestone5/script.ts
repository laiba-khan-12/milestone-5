//listing element
document.getElementById('resumeForm')?.addEventListener('submit' , function(event){
    event.preventDefault();


    //type assertion
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    //*
    const usernameElement = document.getElementById(
        "username"
    )as HTMLInputElement;


    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement){




        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        //*
        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\s+/g, '_' )}_cv.html`




        //picture element
        const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) :'';



        
         


        //create resume output
        const resumeOutput =`
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profilePicture" class="profilePicture">` : ''}
        <p><strong>Name:</strong>  ${name} </p>
        <p><strong>Email:</strong>${email}  </p>
        <p><strong>Phone Number:</strong> ${phone}  </p>

        <h3>Education</h3>
        <p id="edit education" class="editable">${education}</p>

        <h3>Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>

        <h3>Skills</h3>
        <p id="edit-skills" class="editable">${skills}</p>

        `;










        //*
        // const downloadLink = document.createElement('a')
        // downloadLink.href = 'data:text/html;charset=utf-8, ' + encodeURIComponent(resumeOutput)
        // downloadLink.download = uniquePath;
        // downloadLink.textContent ='Download Your 2024 Resume';

        const resumeOutputElement = document.getElementById('resumeOutput')
        if(resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");


            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);

            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click" , () =>{
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);

            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent ="copy Shareable Link";
            shareLinkButton.addEventListener("click" , async () => {
                try{
                    const shareableLink =`https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")} _cv.html`;
                    await navigator.clipboard.writeText(shareableLink);
                    alert("shareable link copied to clipboard");
                }catch(err){
                    console.error("failed to copy link :" , err);
                    alert("failed to copy link to clipboard. please try again.");
                }
            });
            buttonsContainer.appendChild(shareLinkButton);

        }else{
            console.error('resume output container not found');
        }
    }else{
        console.error("form elements are missing");
    }
});



        









// //display the resume output
//         const resumeOutputElement = document.getElementById('resumeOutput')
//         if (resumeOutputElement){
//             resumeOutputElement.innerHTML = resumeOutput;
            
//             //*
//             // resumeOutputElement.appendChild(downloadLink)

//             resumeOutputElement.style.display ="block";

//         }

//     }else{
//         console.error("one or more form elements are missing");
//     }
// });
