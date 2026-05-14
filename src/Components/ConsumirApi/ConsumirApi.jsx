import React, { useState, useEffect, useRef } from "react";
import CardCharacter from "../../Components/CardCharacter/CardCharacter";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./ConsumirApi.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ConsumirApi = ({ search }) => {
  // ESTADOS
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  // funciones
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const cache = useRef({});

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const cacheKey = `${page}-${search}`;

    if (cache.current[cacheKey]) {
      setCharacters(cache.current[cacheKey].results);
      setTotalPages(cache.current[cacheKey].totalPages);
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      const url =
        search !== ""
          ? `https://rickandmortyapi.com/api/character/?page=${page}&species=${search}`
          : `https://rickandmortyapi.com/api/character?page=${page}`;

      fetch(url, { signal: controller.signal })
        .then((res) => {
          if (!res.ok) throw new Error("No encontrado");
          return res.json();
        })
        .then((data) => {
          cache.current[cacheKey] = {
            results: data.results,
            totalPages: data.info.pages,
          };
          setCharacters(data.results);
          setTotalPages(data.info.pages);
          setLoading(false);
        })
        .catch((error) => {
          if (error.name === "AbortError") return;
          setCharacters([]);
          setTotalPages(1);
          setLoading(false);
        });
    }, 600);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [page, search]);

  return (
    <div>
      <div className="Ordenar">
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "40px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : characters.length > 0 ? (
          characters.map((character) => (
            <CardCharacter
              key={character.id}
              name={character.name}
              img={character.image}
              species={character.species}
              status={character.status}
              gender={character.gender}
              origin={character.origin.name}
              location={character.location.name}
            />
          ))
        ) : (
          <div className="Warning">
            <h2>No existe la especie: "{search}"</h2>
          </div>
        )}
      </div>

      {/* paginacion */}
      <Stack spacing={2}>
        <Pagination
          page={page}
          onChange={handlePageChange}
          count={totalPages}
          color="primary"
          size="large"
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default ConsumirApi;
