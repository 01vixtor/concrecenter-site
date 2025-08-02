window.addEventListener('DOMContentLoaded', () => {
  let proj = new CountUp('projetos', 150, { duration: 2 });
  let exp = new CountUp('experiencia', 20, { duration: 2 });
  if (!proj.error) proj.start();
  if (!exp.error) exp.start();
});
