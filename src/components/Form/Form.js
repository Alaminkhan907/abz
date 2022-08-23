import { useForm } from "react-hook-form";


const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleChange= (e) =>{
        const { name, value } = e.target;
    }

    const onSubmit = async data => {
        const formData = new FormData();
        var fileField = document.querySelector('input[type="file"]');
        formData.append('photo', fileField.files[0]);
        formData.append('position_id', 2);
        formData.append('name', 'Jhon');
        formData.append('email', 'Jhon@gmail.com');
        formData.append('phone', '+380955388485');
        console.log(...formData);

        const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users`;
        await fetch(url,
            {
                method: 'POST',
                body: formData,
                headers: {
                    'Token': `${localStorage.getItem('token')}`,
                },
            })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    window.alert('success');
                }
            })
            .catch(error => { console.log(error); });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input  type="text" name="name" placeholder="name" placeholder="name"{...register("name")} />

                <input type="email" name="email" placeholder="email"  {...register("email", { required: true })} />
               

                <input type="number" name="number" placeholder="number"  {...register("number", { required: true })} />
                
                <h3>Select your position</h3>
                <radio >
                    <input type="radio" value="Fronted developer" id="Fronted developer" name="gender"{...register("role", { required: true })} />
                    <label for="Fronted developer">Fronted developer</label>

                    <input type="radio" value="Backend developer" id="Backend developer" name="gender" {...register("role", { required: true })} />
                    <label for="Backend developer">Backend developer</label>

                    <input type="radio" value="Design" id="Design" name="gender" {...register("role", { required: true })} />
                    <label for="Design">Design</label>

                    <input type="radio" value="QA" id="QA" name="gender" {...register("role", { required: true })} />
                    <label for="QA">QA</label>
                </radio>
                <br />

                <input type="file" name="photo" placeholder="photo"  {...register("photo", { required: true })} />
                

                <input type="submit" />
            </form>
        </div>
    )
}

export default Form