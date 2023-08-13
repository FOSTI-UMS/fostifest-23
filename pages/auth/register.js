import FormLogin from "@/components/elements/login/formLogin";

export default function Register() {
  return <FormLogin href="/auth/login" title="Register" changePage="Sudah punya akun?" submit="Register" />;
}
