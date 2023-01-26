import { Grid } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, getUsers } from "api";
import { useState } from "react";
import { Layout } from "shared/components/Layout";
import { QUERY } from "shared/constants/query";
import { Modal } from "ui/Modal";

import { UserCard } from "shared/components/UserCard";
import { useNavigate } from "react-router";
import { UserForm } from "shared/components/UserForm/UserForm";
import { UserType } from "types";
import { toast } from "react-toastify";
import { HomeHeader } from "features/Home/HomeHeader/HomeHeader";
import { useSearchList } from "shared/hooks/useSearchList";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const { reqSearch, setCacheState } = useSearchList();

  const navigate = useNavigate();

  const { isLoading } = useQuery(QUERY.GET_QUERY(0), getUsers, {
    onSuccess: ({ data }) => {
      setUsers(data);
      setCacheState(data);
    },
  });

  const { mutate: createMutate } = useMutation(createUser, {
    onSuccess: (res) => {
      const newData = [res.data, ...users];

      setUsers(newData);
      setCacheState(newData);
      setOpen(false);
      toast.success("istifadəçi uğurla yaradıldı");
    },
  });

  const handleRouteClick = (id: number) => {
    navigate(`edit/${id}`);
  };

  const handleSubmitForm = (form: Partial<UserType>) => {
    createMutate(form);
  };

  const handleSearchUsers = async (searchText: string) => {
    const searchUsersData = await reqSearch(users, "name", searchText);

    setUsers(searchUsersData);
  };

  const usersContent = (
    <>
      {users?.map(({ name, id, company }) => (
        <Grid item key={`user-id-${id}`}>
          <UserCard
            name={name}
            companyName={company?.name}
            handleRouteClick={() => handleRouteClick(id)}
          />
        </Grid>
      ))}
    </>
  );

  return (
    <>
      <Modal
        title="İstifadəçi yarat"
        info="Xanaları tam doldurduöunuzdan əmin olun əks halda istifadəçi yaradılmayacaq"
        open={open}
        onClose={() => setOpen(false)}
      >
        <UserForm onSubmitForm={handleSubmitForm} />
      </Modal>
      <Layout>
        <HomeHeader setOpen={setOpen} onSearch={handleSearchUsers} />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Grid spacing={5} container>
            {usersContent}
          </Grid>
        )}
      </Layout>
    </>
  );
};

export default HomePage;
