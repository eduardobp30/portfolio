async function getRepos() {
  const res = await fetch(
    "https://api.github.com/users/eduardobp30/repos?sort=updated"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const repos = await getRepos();

export { repos };
