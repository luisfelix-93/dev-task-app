import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './index.css'
const KanbanPage = () => {
  const [tasks, setTasks] = useState([
    { id: 'task1', content: 'Tarefa 1' },
    { id: 'task2', content: 'Tarefa 2' },
    { id: 'task3', content: 'Tarefa 3' },
  ]);

  const [columns, setColumns] = useState({
    todo: {
      id: 'todo',
      title: 'A fazer',
      taskIds: ['task1', 'task2'],
    },
    inProgress: {
      id: 'inProgress',
      title: 'Em andamento',
      taskIds: [],
    },
    done: {
      id: 'done',
      title: 'Concluído',
      taskIds: ['task3'],
    },
  });

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const startColumn = columns[source.droppableId];
    const endColumn = columns[destination.droppableId];
    const updatedStartTaskIds = [...startColumn.taskIds];
    const updatedEndTaskIds = [...endColumn.taskIds];

    updatedStartTaskIds.splice(source.index, 1);
    updatedEndTaskIds.splice(destination.index, 0, draggableId);

    const updatedColumns = {
      ...columns,
      [source.droppableId]: {
        ...startColumn,
        taskIds: updatedStartTaskIds,
      },
      [destination.droppableId]: {
        ...endColumn,
        taskIds: updatedEndTaskIds,
      },
    };

    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === draggableId) {
          return { ...task, column: destination.droppableId };
        }
        return task;
      });
      return updatedTasks;
    });
    setColumns(updatedColumns);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {Object.keys(columns).map((columnId) => {
        const column = columns[columnId];
        return (
          <div key={column.id}>
            <h3>{column.title}</h3>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {column.taskIds.map((taskId, index) => {
                    const task = tasks.find((task) => task.id === taskId);
                    return (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: 'none',
                              padding: 16,
                              margin: '0 0 8px 0',
                              backgroundColor: 'lightgrey',
                              ...provided.draggableProps.style,
                            }}
                          >
                            {task.content}
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        );
      })}
    </DragDropContext>
  );
};

export default KanbanPage;
