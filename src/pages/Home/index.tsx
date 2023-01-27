import { Grid } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, getUsers, removeUser } from "api";
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
import { UserDeleteForm } from "shared/components/UserDeleteForm/UserDeleteForm";
import { Loading } from "ui/Loading";

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const [users, setUsers] = useState<Partial<UserType[]>>([]);
  const [currentUser, setCurrentUser] = useState<Partial<UserType> | null>(
    null
  );

  const { reqSearch, setCacheState } = useSearchList();

  const navigate = useNavigate();

  const { isLoading } = useQuery(QUERY.GET_QUERY(0), () => getUsers(null), {
    refetchInterval: 100_000,
    refetchIntervalInBackground: false,
    onSuccess: ({ data }) => {
      setUsers(data);
      setCacheState(data);
    },
    onError: (err) => {
      toast.error("Xəta");
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

  const { mutate: removeMutate } = useMutation(removeUser, {
    onSuccess: () => {
      const newData = users.filter((user) => user?.id !== currentUser?.id);

      setUsers(newData);
      setCacheState(newData);
      setOpenDeleteModal(false);
      toast.success("istifadəçi uğurla silindi");
    },
    onError: (err) => {
      toast.error("Xəta");
    },
  });

  const handleRouteClick = (id: number) => {
    navigate(`/edit/${id}`);
  };

  const handleSubmitForm = (form: Partial<UserType>) => {
    createMutate(form);
  };

  const handleSearchUsers = async (searchText: string) => {
    const searchUsersData = await reqSearch("name", searchText);

    setUsers(searchUsersData);
  };

  const handleDeleteUser = () => {
    removeMutate(currentUser?.id);
  };

  const usersContent = (
    <>
      {users?.map(({ name, id, company }) => (
        <Grid item key={`user-id-${id}`}>
          <UserCard
            name={name}
            companyName={company?.name}
            handleRouteClick={() => handleRouteClick(id)}
            onDelete={() => {
              setCurrentUser({ id, name });
              setOpenDeleteModal(true);
            }}
          />
        </Grid>
      ))}
    </>
  );

  return (
    <>
      <Modal
        title="İstifadəçini sil"
        info={`"${currentUser?.name}" istifadəçisini silməyə əminsinizmi?`}
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
      >
        <UserDeleteForm
          onCancel={() => setOpenDeleteModal(false)}
          onConfirm={handleDeleteUser}
        />
      </Modal>
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
          <Loading />
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
