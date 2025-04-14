

const registerController = async (req,res) => {
    const { name, email, password, repeatPassword } = req.body;

    const prisma = new PrismaClient();

    if(password !== repeatPassword){
        return res.status(400).json({message: "ambas contraseñas deben ser iguales"})
    }

    return res.json({name, email, password, repeatPassword})
}

export default registerController