'use client';
import Link from 'next/link';

import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

import Image from "next/image";
import { Loader2 } from 'lucide-react';


export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">
            Bem-vindo!
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Logue ou crie uma conta para acessar seu painel de controle.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="grid w-full grow items-center px-4 sm:justify-center">
            <ClerkLoaded>
            <SignUp.Root path='/sign-up'>
              <Clerk.Loading>
                {(isGlobalLoading) => (
                  <>
                    <SignUp.Step name="start">
                      <Card className="w-full sm:w-96">
                        <CardHeader>
                          <CardTitle>Crie sua conta no FinanceX</CardTitle>
                          <CardDescription>Bem-vindo! Preencha os detalhes para começar.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-y-4">
                          <div className="grid grid-cols-2 gap-x-4">
                            <Clerk.Connection name="github" asChild>
                              <Button size="sm" variant="outline" disabled={isGlobalLoading}>
                                <Clerk.Loading scope="provider:github">
                                  {(isLoading) =>
                                    isLoading ? (
                                      <Icons.spinner className="size-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Icons.gitHub className="mr-2 size-4" />
                                        GitHub
                                      </>
                                    )
                                  }
                                </Clerk.Loading>
                              </Button>
                            </Clerk.Connection>
                            <Clerk.Connection name="google" asChild>
                              <Button size="sm" variant="outline" disabled={isGlobalLoading}>
                                <Clerk.Loading scope="provider:google">
                                  {(isLoading) =>
                                    isLoading ? (
                                      <Icons.spinner className="size-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Icons.google className="mr-2 size-4" />
                                        Google
                                      </>
                                    )
                                  }
                                </Clerk.Loading>
                              </Button>
                            </Clerk.Connection>
                          </div>
                          <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                            ou
                          </p>
                          <Clerk.Field name="emailAddress" className="space-y-2">
                            <Clerk.Label asChild>
                              <Label>Endereço de e-mail</Label>
                            </Clerk.Label>
                            <Clerk.Input type="text" required asChild>
                              <Input />
                            </Clerk.Input>
                            <Clerk.FieldError className="block text-sm text-destructive" />
                          </Clerk.Field>
                          <Clerk.Field name="password" className="space-y-2">
                            <Clerk.Label asChild>
                              <Label>Senha</Label>
                            </Clerk.Label>
                            <Clerk.Input type="password" required asChild>
                              <Input />
                            </Clerk.Input>
                            <Clerk.FieldError className="block text-sm text-destructive" />
                          </Clerk.Field>
                        </CardContent>
                        <CardFooter>
                          <div className="grid w-full gap-y-4">
                            <SignUp.Action submit asChild>
                              <Button disabled={isGlobalLoading}>
                                <Clerk.Loading>
                                  {(isLoading) => {
                                    return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continuar';
                                  }}
                                </Clerk.Loading>
                              </Button>
                            </SignUp.Action>
                            <Button variant="link" size="sm" asChild>
                              <Link href="/sign-in">Já tem uma conta? Faça login</Link>
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </SignUp.Step>

                    <SignUp.Step name="continue">
                      <Card className="w-full sm:w-96">
                        <CardHeader>
                          <CardTitle>Continuar o registro</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Clerk.Field name="username" className="space-y-2">
                            <Clerk.Label>
                              <Label>Nome de usuário</Label>
                            </Clerk.Label>
                            <Clerk.Input type="text" required asChild>
                              <Input />
                            </Clerk.Input>
                            <Clerk.FieldError className="block text-sm text-destructive" />
                          </Clerk.Field>
                        </CardContent>
                        <CardFooter>
                          <div className="grid w-full gap-y-4">
                            <SignUp.Action submit asChild>
                              <Button disabled={isGlobalLoading}>
                                <Clerk.Loading>
                                  {(isLoading) => {
                                    return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continuar';
                                  }}
                                </Clerk.Loading>
                              </Button>
                            </SignUp.Action>
                          </div>
                        </CardFooter>
                      </Card>
                    </SignUp.Step>

                    <SignUp.Step name="verifications">
                      <SignUp.Strategy name="code">
                        <Card className="w-full sm:w-96">
                          <CardHeader>
                            <CardTitle>Verifique seu e-mail</CardTitle>
                            <CardDescription>Use o link de verificação enviado para o seu endereço de e-mail</CardDescription>
                          </CardHeader>
                          <CardContent className="grid gap-y-4">
                            <Clerk.Field name="code">
                              <Clerk.Label className="sr-only">Código de verificação</Clerk.Label>
                              <div className="grid items-center justify-center gap-y-2">
                                <Clerk.Field name="code" className="space-y-2">
                                  <Clerk.Label asChild>
                                    <Label className="sr-only">Endereço de e-mail</Label>
                                  </Clerk.Label>
                                  <div className="flex justify-center text-center">
                                    <Clerk.Input
                                      type="otp"
                                      className="flex justify-center has-[:disabled]:opacity-50"
                                      autoSubmit
                                      render={({ value, status }) => {
                                        return (
                                          <div
                                            data-status={status}
                                            className={cn(
                                              'relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
                                              {
                                                'z-10 ring-2 ring-ring ring-offset-background':
                                                  status === 'cursor' || status === 'selected',
                                              },
                                            )}
                                          >
                                            {value}
                                            {status === 'cursor' && (
                                              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                                <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                                              </div>
                                            )}
                                          </div>
                                        );
                                      }}
                                    />
                                  </div>
                                  <Clerk.FieldError className="block text-center text-sm text-destructive" />
                                </Clerk.Field>
                                <SignUp.Action
                                  asChild
                                  resend
                                  className="text-muted-foreground"
                                  fallback={({ resendableAfter }) => (
                                    <Button variant="link" size="sm" disabled>
                                      Não recebeu um código? Reenviar (
                                      <span className="tabular-nums">{resendableAfter}</span>)
                                    </Button>
                                  )}
                                >
                                  <Button variant="link" size="sm">
                                    Não recebeu um código? Reenviar
                                  </Button>
                                </SignUp.Action>
                              </div>
                            </Clerk.Field>
                          </CardContent>
                          <CardFooter>
                            <div className="grid w-full gap-y-4">
                              <SignUp.Action submit asChild>
                                <Button disabled={isGlobalLoading}>
                                  <Clerk.Loading>
                                    {(isLoading) => {
                                      return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continuar';
                                    }}
                                  </Clerk.Loading>
                                </Button>
                              </SignUp.Action>
                            </div>
                          </CardFooter>
                        </Card>
                      </SignUp.Strategy>
                    </SignUp.Step>
                  </>
                )}
              </Clerk.Loading>
            </SignUp.Root>
            </ClerkLoaded>

            <ClerkLoading>
              <Loader2 className='animate-spin text-muted-foreground'/>
            </ClerkLoading>
            
          </div>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image 
          src="/logo.svg"
          alt="Logo"
          height={100}
          width={100}
        />
      </div>
    </div>
  )
}