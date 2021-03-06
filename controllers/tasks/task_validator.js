const taskValidator = (req, res, next) => {
    if (req.body.name.length < 4) {
        return res.status(400).json({
            message: 'Name is required and must be longer than 3 characters',
        });
    }
    if (req.body.description.length < 10) {
        return res.status(400).json({
            message:
                'Description is required and must be longer than 9 characters',
        });
    }
    if (
        req.body.priority === null ||
        req.body.priority < 1 ||
        req.body.priority > 3
    ) {
        return res.status(400).json({
            message: 'Priority must be between 1 and 3',
        });
    }
    if (!req.body.dueDate) {
        return res.status(400).json({
            message: 'Due date is required',
        });
    }
    next();
};

module.exports = taskValidator;
