import Header from './components/Header';
import Content from './components/Content';

function TaskLogging() {
  return (
    <div className="notificationsFrame">
      <div className="panel">
        <Header title="Registro de tareas"/>
        <Content />
      </div>
    </div>
  );
}

export default TaskLogging;
