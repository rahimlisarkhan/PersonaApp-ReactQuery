import { useMutation, useQuery } from "@tanstack/react-query";
import { getUsers, updateUser } from "api";
import { EditForm } from "features/Edit/EditForm";
import { useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { Layout } from "shared/components/Layout";
import { QUERY } from "shared/constants/query";
import { Loading } from "ui/Loading";

export const EditPage = () => {
  const { user_id } = useParams();

  const navigate = useNavigate();

  useLayoutEffect(() => {
    !user_id && navigate("/");
  }, [user_id]);

  const { data: res, isLoading } = useQuery(
    QUERY.GET_QUERY(user_id),
    () => getUsers(user_id),
    {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      onError: (err) => {
        toast.error("Xəta");
      },
    }
  );

  const { mutate: updateMutate } = useMutation(
    (data) => updateUser(user_id, data),
    {
      onSuccess: () => {
        navigate("/");
        toast.success("istifadəçinin məlumatları uğurla yeniləndi");
      },
      onError: (err) => {
        toast.error("Xəta");
      },
    }
  );

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <EditForm userData={res?.data} onSave={updateMutate} />
      )}
    </Layout>
  );
};

export default EditPage;
