import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {
        let r = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        let res = await r.text();
        console.log(data, res);
    };

    return (
        <>
            <h1 className="text text-white text-[48px] font-['Akaya_Kanadaka'] font-normal mb-5 m-15">
                Contact us ✨
            </h1>
            {isSubmitting && <div>Loading...</div>}

            <div className='flex justify-around items-center'>
                <div>
                    <form className="container flex flex-col text-white max-w-[500px] m-15 gap-3" onSubmit={handleSubmit(onSubmit)}>
                        <label>First Name</label>
                        <input className='bg-white text-black rounded-md'
                            {...register("firstName", {
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i
                            })}
                        />
                        {errors?.firstName?.type === "required" && <p>This field is required</p>}
                        {errors?.firstName?.type === "maxLength" && (
                            <p>First name cannot exceed 20 characters</p>
                        )}
                        {errors?.firstName?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                        )}

                        <label>Last Name</label>
                        <input className='bg-white text-black rounded-md' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                        {errors?.lastName?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                        )}

                        <label>Age</label>
                        <input className='bg-white text-black rounded-md' type="number" {...register("age", { min: 18, max: 99 })} />
                        {errors.age && (
                            <p>You must be older than 18 and younger than 99 years old</p>
                        )}
                        <label>Message</label>
                        <textarea className='bg-white text-black rounded-md'
                            {...register("message", { required: true })}
                            rows={4}
                            cols={40}
                        />
                        {errors?.message && <p>This field is required</p>}

                        <input className="
  w-[151px]
  h-[50px]
  rounded-[5px]
  bg-gradient-to-r from-[#F09FFD] to-[#495C93]
//   text-black
  text-2xl  // adjust as needed for 'larger'
   font-['Akaya_Kanadaka'] font-normal
" type="submit" />
                    </form>
                </div>
                <div className="img w-[500px] rounded-xl"><img src="/src/assets/contact.jpg" alt="" />
                </div>


            </div>

        </>
    );
}

export default Contact;
