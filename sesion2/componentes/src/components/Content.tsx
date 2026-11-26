import ActivityItem from './ActivityItem';

function Content() {
  return (
    <div className="content">
      <div className="line"></div>
      <ActivityItem name="Francisca" time="Hace una hora" text="Fui a comer con amigos" />
      <ActivityItem name="Paco" time="10:00 am" text="Leí un artículo sobre tecnología" />
      <ActivityItem name="Quica" time="10:00 am" text="Escribí notas sobre un proyecto importante" />
      <ActivityItem name="Curro" time="2:21 pm" text="Preparé la presentación para la reunión de mañana" />
    </div>
  );
}

export default Content;