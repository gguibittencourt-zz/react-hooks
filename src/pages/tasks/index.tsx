import React, {useEffect, useState} from "react";
import {Badge, Button, Table} from "react-bootstrap";
import api from "../../services/api";
import moment from 'moment';

interface Task {
    id: number;
    title: string;
    description: string;
    finished: boolean;
    UpdatedAt: Date;
}

const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        loadTasks();
    }, [])

    async function loadTasks() {
        const response = await api.get('/tasks');
        setTasks(response.data);
    }

    function formatDate(date: Date) {
        return moment(date).format('DD/MM/YYYY');
    }

    return (
        <div className="container">
            <h1>Tasks</h1>
            <br/>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Updated at</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{formatDate(task.UpdatedAt)}</td>
                            <td>
                                <Badge variant={task.finished ? 'success' : 'warning'}>
                                    {task.finished ? 'Finalizado' : 'Pendente'}
                                </Badge>
                            </td>
                            <td>
                                <Button size="sm" >Editar</Button>{' '}
                                <Button size="sm" variant="success">Finalizar</Button>{' '}
                                <Button size="sm" variant="info">Visualizar</Button>{' '}
                                <Button size="sm" variant="danger">Excluir</Button>{' '}
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    );
}

export default Tasks;