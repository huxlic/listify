const updateCount = (tasks, status) => {
    return tasks.filter((task) => task.status === status).length
}

export default updateCount;