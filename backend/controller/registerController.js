exports.createUser = async (req, res, next) => {
    try {
        const user = await registerModel.create(req.body); // Use req.body directly

        res.status(201).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            success: false,
            message: 'Error registering user.',
        });
    }
};