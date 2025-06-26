import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";
import Loader from "./Loader";

const Data = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchScores() {
      try {
        const { data, error } = await supabase
          .from("x86asm")
          .select("*")
          .order("score", { ascending: false });

        if (error) throw error;
        setScores(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchScores();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Quiz Leaderboard</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>University</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score) => (
              <tr key={score.id}>
                <td>{score.first_name}</td>
                <td>{score.university}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
